class InventoryControl:
    INGREDIENTS = {
        'hamburguer': ['pao', 'carne', 'queijo'],
        'pizza': ['massa', 'queijo', 'molho'],
        'misto-quente': ['pao', 'queijo', 'presunto'],
        'coxinha': ['massa', 'frango'],
    }
    MINIMUM_INVENTORY = {
        'pao': 50,
        'carne': 50,
        'queijo': 100,
        'molho': 50,
        'presunto': 50,
        'massa': 50,
        'frango': 50,
    }

    def __init__(self):
        self.__used_ingredients = {
            'pao': 0,
            'carne': 0,
            'queijo': 0,
            'molho': 0,
            'presunto': 0,
            'massa': 0,
            'frango': 0,
        }

    def add_new_order(self, customer, order, day):
        if (
            (order == 'hamburguer') and
            (order in self.get_available_dishes())
        ):
            self.__used_ingredients['pao'] += 1
            self.__used_ingredients['carne'] += 1
            self.__used_ingredients['queijo'] += 1
        elif (
            (order == 'pizza') and
            (order in self.get_available_dishes())
        ):
            self.__used_ingredients['massa'] += 1
            self.__used_ingredients['queijo'] += 1
            self.__used_ingredients['molho'] += 1
        elif (
            (order == 'misto-quente') and
            (order in self.get_available_dishes())
        ):
            self.__used_ingredients['pao'] += 1
            self.__used_ingredients['queijo'] += 1
            self.__used_ingredients['presunto'] += 1
        elif (
            (order == 'coxinha') and
            (order in self.get_available_dishes())
        ):
            self.__used_ingredients['massa'] += 1
            self.__used_ingredients['frango'] += 1
        else:
            return False

    def get_quantities_to_buy(self):
        return self.__used_ingredients

    def get_available_dishes(self):
        available = {'hamburguer', 'coxinha', 'pizza', 'misto-quente'}

        for ingredient, quantity in self.__used_ingredients.items():
            if (quantity >= self.MINIMUM_INVENTORY[ingredient]):
                for food, ingredients in self.INGREDIENTS.items():
                    if (ingredient in ingredients):
                        available.discard(food)
        return available
