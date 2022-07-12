from collections import deque


class Queue:
    def __init__(self):
        self._queue = deque()

    def __len__(self):
        return len(self._queue)

    def enqueue(self, value):
        self._queue.append(value)

    def dequeue(self):
        return self._queue.popleft()

    def search(self, index: int):
        if (-1 < index < len(self._queue)):
            return self._queue[index]
        else:
            raise IndexError
