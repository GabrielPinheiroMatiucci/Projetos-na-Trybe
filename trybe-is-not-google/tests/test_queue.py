import pytest
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


def test_search():
    queue = Queue()

    queue.enqueue(True)
    queue.enqueue(False)
    queue.enqueue(None)

    assert queue.search(0) is True
    assert queue.search(1) is False
    assert queue.search(2) is None

    with pytest.raises(IndexError):
        queue.search(3)
