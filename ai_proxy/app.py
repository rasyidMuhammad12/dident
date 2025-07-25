from flask import Flask, request, jsonify
from ocr import extract_text
from face_match import compare_faces
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)

@app.route("/ocr", methods=["POST"])
def ocr():

    image = request.files["image"].read()
    texts = extract_text(image)
    return jsonify({"texts": texts})

@app.route("/face-match", methods=["POST"])
def face_match():
    source = request.files["ktp"].read()
    target = request.files["selfie"].read()
    result = compare_faces(source, target)
    return jsonify({"match": result})

if __name__ == "__main__":
    app.run(debug=True)
