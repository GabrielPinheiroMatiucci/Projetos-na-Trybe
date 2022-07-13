def quicksort(nums: list):
    if (len(nums) <= 1):
        return nums

    middle_index = len(nums) // 2
    middle = nums[middle_index]
    lowers = []
    biggers = []

    for index, num in enumerate(nums):
        if (num > middle):
            biggers.append(num)
        if (index != middle_index and num <= middle):
            lowers.append(num)

    return quicksort(lowers) + [middle] + quicksort(biggers)


def list_of_two(nums: list):
    len_nums = len(nums)

    if (len_nums <= 1):
        return False

    if (validate_num(nums[0]) is False):
        return False
    if (nums[0] == nums[1]):
        return nums[0]
    else:
        return False


def validate_num(num: int):
    if (isinstance(num, str) or num < 0):
        return False
    else:
        return True


def find_duplicate(nums: list):
    len_nums = len(nums)

    if (len_nums <= 2):
        return list_of_two(nums)

    nums = quicksort(nums)

    for index in range(1, len_nums):
        if (validate_num(nums[index]) is False):
            return False
        else:
            if (nums[index] == nums[index - 1]):
                return nums[index]

    return False
