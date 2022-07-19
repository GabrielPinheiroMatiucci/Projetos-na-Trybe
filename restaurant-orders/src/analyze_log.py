import csv


def validate_extension(path_to_file: str):
    if (not path_to_file.endswith('.csv')):
        raise FileNotFoundError(f"Extensão inválida: {path_to_file}")


def check_customers(
        customer: str,
        order: str,
        day: str,
        arnaldo_hamburguers: int,
        maria_orders: dict,
        joao_orders: set,
        joao_days: set,
        ):
    if (customer == 'maria'):
        if (order not in maria_orders):
            maria_orders[order] = 1
        else:
            maria_orders[order] += 1
    if (customer == 'arnaldo' and order == 'hamburguer'):
        arnaldo_hamburguers += 1
    if (customer == 'joao'):
        joao_orders.add(order)
        joao_days.add(day)

    return [arnaldo_hamburguers, maria_orders, joao_orders, joao_days]


def write_mkt_file(
        orders: set,
        days: set,
        maria_orders: dict,
        arnaldo_hamburguers: int,
        joao_orders: set,
        joao_days: set,
        ):
    most_ordered = ['', 0]

    for order_maria, quantity in maria_orders.items():
        if (quantity > most_ordered[1]):
            most_ordered[1] = quantity
            most_ordered[0] = order_maria

    text_to_write = [
        most_ordered[0],
        str(arnaldo_hamburguers),
        str(orders.difference(joao_orders)),
        str(days.difference(joao_days)),
    ]

    with open('data/mkt_campaign.txt', 'w') as file:
        for line in text_to_write:
            file.write(line)
            file.write("\n")


def analyze_log(path_to_file: str):
    validate_extension(path_to_file)

    orders = set()
    days = set()
    arnaldo_hamburguers = 0
    maria_orders = dict()
    joao_orders = set()
    joao_days = set()

    try:
        with open(path_to_file) as file:
            reader = csv.reader(file, delimiter=',')
            for customer, order, day in reader:
                orders.add(order)
                days.add(day)

                (
                    arnaldo_hamburguers,
                    maria_orders,
                    joao_orders,
                    joao_days
                    ) = check_customers(
                    customer,
                    order,
                    day,
                    arnaldo_hamburguers,
                    maria_orders,
                    joao_orders,
                    joao_days,
                )
    except FileNotFoundError:
        raise FileNotFoundError(f"Arquivo inexistente: {path_to_file}")
    else:
        write_mkt_file(
            orders,
            days,
            maria_orders,
            arnaldo_hamburguers,
            joao_orders,
            joao_days,
        )
