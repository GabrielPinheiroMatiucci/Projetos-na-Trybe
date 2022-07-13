from challenges.challenge_study_schedule import study_schedule


def test_valores_invalidos():
    permanence_periods = [(1, None), (2, 8)]
    target_time = 3
    assert study_schedule(permanence_periods, target_time) is None

    permanence_periods = [(1, 7), (2, '4')]
    target_time = 4
    assert study_schedule(permanence_periods, target_time) is None


def test_target_time_vazio():
    permanence_periods = [(1, 5), (2, 8)]
    target_time = None
    assert study_schedule(permanence_periods, target_time) is None


def test_permanence_periods_e_target_time_validos():
    permanence_periods = [(1, 5), (2, 8), (3, 3), (2, 7)]

    target_time = 1
    assert study_schedule(permanence_periods, target_time) == 1

    target_time = 2
    assert study_schedule(permanence_periods, target_time) == 3

    target_time = 5
    assert study_schedule(permanence_periods, target_time) == 3

    target_time = 9
    assert study_schedule(permanence_periods, target_time) == 0
