from challenges.challenge_palindromes_recursive import is_palindrome_recursive


def test_string_vazia():
    text = ''
    assert is_palindrome_recursive(text, 0, (len(text) - 1)) is False


def test_string_nao_e_palindromo():
    text = 'alo'
    assert is_palindrome_recursive(text, 0, (len(text) - 1)) is False

    text = 'abab'
    assert is_palindrome_recursive(text, 0, (len(text) - 1)) is False
