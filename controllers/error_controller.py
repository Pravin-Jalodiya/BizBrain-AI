from flask import Blueprint, jsonify
error_controller = Blueprint('error_controller', __name__)

@error_controller.errorhandler(404)
def page_not_found(e):
    return jsonify({'error': 'The requested resource was not found'}), 404