from django.contrib import admin
from .models import React

class ReactAdmin(admin.ModelAdmin):
    list_display = ('chatmessages', 'questions')  # Display fields in the admin list view

admin.site.register(React, ReactAdmin)