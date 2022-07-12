from ting_file_management.queue import Queue


def get_occurrences(word: str, option: bool, data: list):
    occurrences = []

    for index, linha in enumerate(data['linhas_do_arquivo']):
        if (word in linha.lower()):
            if (option):
                occurrences.append(
                    {'linha': (index + 1), 'conteudo': linha},
                )
            else:
                occurrences.append({'linha': (index + 1)})

    return occurrences


def create_list_occurrences(word: str, instance: Queue, option: bool):
    result = []

    for data in instance._queue:
        elem = {
            'palavra': word,
            'arquivo': data['nome_do_arquivo'],
            'ocorrencias': get_occurrences(word, option, data),
        }

        if (len(elem['ocorrencias']) > 0):
            result.append(elem)

    return result


def exists_word(word: str, instance: Queue):
    result = create_list_occurrences(word, instance, False)

    return result


def search_by_word(word: str, instance: Queue):
    result = create_list_occurrences(word, instance, True)

    return result
