from django.conf import settings


def global_variables(request):
    """
    Global variables available in all templates
    """
    data = {
        'DEBUG': settings.DEBUG,
    }
    return data