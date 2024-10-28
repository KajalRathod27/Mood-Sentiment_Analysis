from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load your model and data here
df = pd.read_csv('english_hindi_songs_with_features.csv')  # Update with your actual data file
model = joblib.load('song_recommendation_model.pkl')

def recommend_songs_based_on_mood(mood_input, df):
    # Filter the dataframe to find songs with the same mood
    filtered_songs = df[df['mood'] == mood_input]

    # Separate English and Hindi songs
    english_songs = filtered_songs[filtered_songs['language'] == 'English'].head(5)
    hindi_songs = filtered_songs[filtered_songs['language'] == 'Hindi'].head(5)

    return {
        'english_songs': english_songs[['track_name', 'artist', 'spotify_uri']].to_dict(orient='records'),
        'hindi_songs': hindi_songs[['track_name', 'artist', 'spotify_uri']].to_dict(orient='records')
    }

@app.route('/recommend', methods=['GET'])
def recommend():
    mood_input = request.args.get('mood')
    recommendations = recommend_songs_based_on_mood(mood_input, df)

    return jsonify(recommendations)

if __name__ == '__main__':
    app.run(debug=True)
