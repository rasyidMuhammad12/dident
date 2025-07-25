import boto3
import os

def extract_text(image_bytes):
    client = boto3.client('rekognition', region_name=os.getenv("AWS_REGION"))
    
    response = client.detect_text(Image={'Bytes': image_bytes})
    
    texts = [d['DetectedText'] for d in response['TextDetections'] if d['Type'] == 'LINE']
    
    return texts
