import sys
from ting_file_management.file_management import txt_importer
from ting_file_management.queue import Queue


def process(path_file: str, instance: Queue):
    duplicate = False

    for elem in instance._queue:
        if (elem['nome_do_arquivo'] == path_file):
            duplicate = True

    if (not duplicate):
        text = txt_importer(path_file)
        data = {
            'nome_do_arquivo': path_file,
            'qtd_linhas': len(text),
            'linhas_do_arquivo': text,
        }
        instance.enqueue(data)
        sys.stdout.write(str(data))


def remove(instance: Queue):
    if (len(instance) < 1):
        sys.stdout.write('Não há elementos\n')
    else:
        data = instance.dequeue()
        sys.stdout.write(
            f"Arquivo {data['nome_do_arquivo']} removido com sucesso\n",
        )


def file_metadata(instance: Queue, position: int):
    try:
        data = instance.search(position)
    except IndexError:
        sys.stderr.write('Posição inválida')
    else:
        sys.stdout.write(str(data))
