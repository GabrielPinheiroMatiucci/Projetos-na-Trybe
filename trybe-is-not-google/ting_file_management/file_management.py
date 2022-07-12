# https://stackoverflow.com/questions/15233340/getting-rid-of-n-when-using-readlines
# https://docs.pytest.org/en/7.1.x/how-to/capture-stdout-stderr.html
import sys


def txt_importer(path_file: str):
    if (path_file.endswith('.txt')):
        try:
            with open(path_file, mode='r') as file:
                text = file.read().splitlines()
        except FileNotFoundError:
            sys.stderr.write(f"Arquivo {path_file} não encontrado\n")
        else:
            return text
    else:
        sys.stderr.write("Formato inválido\n")
