from flask import Response, request
from flask_restful import Resource
from mongoengine import DoesNotExist, Q
import models
import json

class CommentListEndpoint(Resource):

    def queryset_to_serialized_list(self, queryset, post_id):
        serialized_list = [
            item.to_dict() for item in queryset
        ]
        return serialized_list
    
    def get(self, post_id):
        keyword = request.args.get('keyword')
        if keyword:
            # find data where *any of the fields contain the term...
            data = models.Comment.objects.filter(
                (Q(comment__icontains=keyword) | Q(author__icontains=keyword)) &
                Q(post=post_id)
            )
        else:
            data = models.Comment.objects.filter(post=post_id)

        data = self.queryset_to_serialized_list(data, post_id)
        return Response(json.dumps(data), mimetype="application/json", status=200)

    def post(self, post_id):
        body = request.get_json()
        post = models.Comment(
            comment=body.get('comment'),
            author=body.get('author'),
            post=post_id
        ).save()
        serialized_data = {
            'id': str(post.id),
            'message': 'Post {0} successfully created.'.format(post.id)
        }
        return Response(json.dumps(serialized_data), mimetype="application/json", status=201)
        
class CommentDetailEndpoint(Resource):
    def put(self, post_id, id):
        comment = models.Comment.objects.get(id=id)
        request_data = request.get_json()
        comment.comment = request_data.get('comment')
        comment.save()
        print(comment.to_json())
        return Response(comment.to_json(), mimetype="application/json", status=200)
    
    def delete(self, post_id, id):
        comment = models.Comment.objects.get(id=id)
        comment.delete()
        serialized_data = {
            'message': 'Comment {0} successfully deleted.'.format(id)
        }
        return Response(json.dumps(serialized_data), mimetype="application/json", status=200)

    def get(self, post_id, id):
        comment = models.Comment.objects.get(id=id)
        return Response(comment.to_json(), mimetype="application/json", status=200)

def initialize_routes(api):
    api.add_resource(CommentListEndpoint, '/api/posts/<post_id>/comments', '/api/posts/<post_id>/comments/')
    api.add_resource(CommentDetailEndpoint, '/api/posts/<post_id>/comments/<id>', '/api/posts/<post_id>/comments/<id>/')