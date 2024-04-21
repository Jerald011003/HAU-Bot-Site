from django.contrib import admin
from .models import React

class ReactAdmin(admin.ModelAdmin):
    list_display = ('chatmessages', 'questions') 

admin.site.register(React, ReactAdmin)