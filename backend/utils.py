"""
This module contains helper functions!
"""
import re


def validate_email(email: str) -> bool:
    """ validates email """
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# # Example usage
# email = "test@exaj.mple.@com"
# print(is_valid_email(email))  # Output: True
