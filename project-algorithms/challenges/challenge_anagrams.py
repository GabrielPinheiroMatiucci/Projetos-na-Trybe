# https://www.freecodecamp.org/news/python-remove-character-from-a-string-how-to-delete-characters-from-strings/#:~:text=In%20Python%20you%20can%20use,altered%20because%20strings%20are%20immutable.


def binarysearch_word(letter: str, word: str):
    if (len(word) == 1):
        if (word == letter):
            return letter
        else:
            return None

    middle = len(word) // 2
    if (letter in word[:middle]):
        return binarysearch_word(letter, word[:middle])
    else:
        return binarysearch_word(letter, word[middle:])


def validate_strings(first_string: str, second_string: str):
    if (first_string == "" or second_string == ""):
        return False
    if (len(first_string) != len(second_string)):
        return False

    return True


def is_anagram(first_string: str, second_string: str):
    if (validate_strings(first_string, second_string) is False):
        return False

    first_string = first_string.lower()
    second_string = second_string.lower()
    anagram_decoded = ""

    for letter in first_string:
        result = binarysearch_word(letter, second_string)
        if (result is not None):
            anagram_decoded = anagram_decoded + result
            second_string = second_string.replace(result, '', 1)

    if (anagram_decoded == first_string):
        return True

    return False
