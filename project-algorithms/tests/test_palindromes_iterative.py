from challenges.challenge_palindromes_iterative import is_palindrome_iterative


def test_string_vazia():
    text = ''
    assert is_palindrome_iterative(text) is False


def test_string_nao_e_palindromo():
    text = 'aloa'
    assert is_palindrome_iterative(text) is False

    text = 'abab'
    assert is_palindrome_iterative(text) is False


def test_string_e_palindromo():
    text = 'd'
    assert is_palindrome_iterative(text) is True

    text = 'dd'
    assert is_palindrome_iterative(text) is True

    text = 'ArarA'
    assert is_palindrome_iterative(text) is True

    text = 'TENET'
    assert is_palindrome_iterative(text) is True
