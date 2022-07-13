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
