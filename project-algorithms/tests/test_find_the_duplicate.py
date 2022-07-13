from challenges.challenge_find_the_duplicate import find_duplicate


def test_lista_vazia():
    nums = []

    assert find_duplicate(nums) is False


def test_lista_strings():
    nums = ['z', 'a', 'h']

    assert find_duplicate(nums) is False
