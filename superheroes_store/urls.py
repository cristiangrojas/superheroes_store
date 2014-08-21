from django.conf.urls import patterns, include, url
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
from django.contrib import admin


admin.autodiscover()


urlpatterns = patterns('',
    # To be able to server statics in development if DEBUG is False
    (
        r'^static/(?P<path>.*)$',
        'django.views.static.serve',
        {'document_root': settings.STATIC_ROOT}
    ),
    (
        r'^media/(?P<path>.*)$',
        'django.views.static.serve',
        {'document_root': settings.MEDIA_ROOT}
    ),

    url(r'^$', TemplateView.as_view(template_name='homepage.html'), name='home'),
    url(r'^accounts/', include('accounts.urls', namespace='accounts')),

    url(r'^admin/', include(admin.site.urls)),
) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


