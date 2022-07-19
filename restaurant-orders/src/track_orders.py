class TrackOrders:
    def __init__(self):
        self.__customers = dict()
        self.__orders = 0
        self.__dishes = set()
        self.__days = dict()

    def __len__(self):
        return self.__orders

    def add_new_order(self, customer, order, day):
        self.__dishes.add(order)
        self.__orders += 1

        if (day not in self.__days):
            self.__days[day] = 1
        else:
            self.__days[day] += 1

        if (customer not in self.__customers):
            self.__customers[customer] = {
                'orders': [(order, day)],
                'dishes': {order: 1},
                'visited': {day},
            }
        else:
            self.__customers[customer]['orders'].append((order, day))
            self.__customers[customer]['visited'].add(day)
            if (order not in self.__customers[customer]['dishes']):
                self.__customers[customer]['dishes'][order] = 1
            else:
                self.__customers[customer]['dishes'][order] += 1

    def get_most_ordered_dish_per_customer(self, customer):
        dish = ['', 0]
        for name, quantity in self.__customers[customer]['dishes'].items():
            if (quantity > dish[1]):
                dish[0], dish[1] = name, quantity

        return dish[0]

    def get_never_ordered_per_customer(self, customer):
        customer_dishes = set(self.__customers[customer]['dishes'].keys())
        return self.__dishes.difference(customer_dishes)

    def get_days_never_visited_per_customer(self, customer):
        set_days = set(self.__days.keys())
        return set_days.difference(self.__customers[customer]['visited'])

    def get_busiest_day(self):
        busiest_day = ['', 0]
        for name, quantity in self.__days.items():
            if (quantity > busiest_day[1]):
                busiest_day[0], busiest_day[1] = name, quantity

        return busiest_day[0]

    def get_least_busy_day(self):
        days_list = list(self.__days.items())
        least_busy_day = [days_list[0][0], days_list[0][1]]
        for name, quantity in days_list:
            if (quantity < least_busy_day[1]):
                least_busy_day[0], least_busy_day[1] = name, quantity

        return least_busy_day[0]
