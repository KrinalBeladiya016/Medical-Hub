# Generated by Django 5.0.3 on 2024-09-08 11:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Api', '0002_alter_userprofile_contact_alter_userprofile_profile_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='password',
            field=models.CharField(default=123654, max_length=8),
            preserve_default=False,
        ),
    ]
