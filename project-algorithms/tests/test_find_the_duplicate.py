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


def test_lista_com_elementos_negativos():
    nums = [3, -1, 2]

    assert find_duplicate(nums) is False


def test_listas_elementos_duplicados():
    nums = [1, 2, 3, 1]
    assert find_duplicate(nums) == 1

    nums = [1, 4, 5, 6, 10, 5]
    assert find_duplicate(nums) == 5

    nums = [3, 3, 2, 1]
    assert find_duplicate(nums) == 3
