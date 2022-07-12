from challenges.challenge_anagrams import is_anagram


def test_palavras_nao_sao_anagramas():
    first_string = 'teste'
    second_string = ''
    assert is_anagram(first_string, second_string) is False

    first_string = ''
    second_string = 'teste'
    assert is_anagram(first_string, second_string) is False

    first_string = 'tteee'
    second_string = 'teste'
    assert is_anagram(first_string, second_string) is False

    first_string = 'ola'
    second_string = 'lhao'
    assert is_anagram(first_string, second_string) is False
