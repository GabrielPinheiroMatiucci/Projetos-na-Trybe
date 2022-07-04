def validate_permanence_period(period: tuple):
    if (isinstance(period[0], int) and isinstance(period[1], int)):
        return True
    return None


def study_schedule(permanence_period: list, target_time: int):
    if (not isinstance(target_time, int)):
        return None

    counter = 0

    for element in permanence_period:
        if (validate_permanence_period(element) is None):
            return None
        if (element[0] <= target_time <= element[1]):
            counter += 1

    return counter
