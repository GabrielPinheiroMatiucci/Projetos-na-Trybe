from challenges.challenge_find_the_duplicate import find_duplicate


def test_lista_vazia():
    nums = []

    assert find_duplicate(nums) is False


def test_lista_strings():
    nums = ['z', 'a', 'h']

    assert find_duplicate(nums) is False


def test_lista_sem_repeticao():
    nums = [1, 2, 3, 4]

    assert find_duplicate(nums) is False


def test_lista_com_um_elemento():
    nums = [1]

    assert find_duplicate(nums) is False
