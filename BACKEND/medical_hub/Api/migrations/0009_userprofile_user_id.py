# Generated by Django 5.0.3 on 2024-09-22 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0008_hospital'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='user_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
