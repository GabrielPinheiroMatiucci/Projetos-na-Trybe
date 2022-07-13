from challenges.challenge_palindromes_recursive import is_palindrome_recursive


def test_string_vazia():
    text = ''
    assert is_palindrome_recursive(text, 0, (len(text) - 1)) is False
