
import boto3
import os

def compare_faces(source_bytes, target_bytes):
    client = boto3.client('rekognition', region_name=os.getenv("AWS_REGION"))

    response = client.compare_faces(
        SourceImage={'Bytes': source_bytes},
        TargetImage={'Bytes': target_bytes},
        SimilarityThreshold=80
    )

    return len(response['FaceMatches']) > 0
