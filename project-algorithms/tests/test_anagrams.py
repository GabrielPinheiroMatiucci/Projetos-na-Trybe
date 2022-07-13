from challenges.challenge_anagrams import is_anagram


def test_palavras_nao_sao_anagramas_e_palavras_vazias():
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


def test_palavras_case_insensitive():
    first_string = 'olha'
    second_string = 'LAOH'
    assert is_anagram(first_string, second_string) is True

    first_string = 'PaPeL'
    second_string = 'AElpp'
    assert is_anagram(first_string, second_string) is True
