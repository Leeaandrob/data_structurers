def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)


def sum_recursion(n):
    if n == 0:
        return 0
    return n + sum_recursion(n - 1)


def sum_func(n):
    if len(str(n)) == 1:
        return n

    return n % 10 + sum_func(n/10)


def word_split(phrase, list_of_words, output=None):
    if output is None:
        output = []

    for word in list_of_words:
        if phrase.startswith(word):
            output.append(word)
            return word_split(phrase[len(word):], list_of_words, output)

    return output
