from ting_file_management.queue import Queue
from ting_file_management.file_management import txt_importer


phrases_path = 'tests/assets/phrases.txt'


def test_enqueue():
    queue = Queue()

    queue.enqueue(txt_importer(phrases_path))
    assert len(queue._queue) == 1

    queue.enqueue(txt_importer(phrases_path))
    assert len(queue._queue) == 2


def test_dequeue():
    queue = Queue()

    queue.enqueue(txt_importer(phrases_path))
    queue.enqueue(txt_importer(phrases_path))
    
    queue.dequeue()
    assert len(queue._queue) == 1

    queue.dequeue()
    assert len(queue._queue) == 0
