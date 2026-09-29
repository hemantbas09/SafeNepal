# SAFE-Nepal

In an ever-changing world where environmental concerns and sustainable practices have become paramount, the Students' Association for Forest and Environment (SAFE-Nepal) recognized the need to enhance their outreach and impact. This community responsibility project aimed to address this challenge by developing a website for SAFE-Nepal, the Green Organization of the Institute of Forestry in Pokhara, Nepal. The website serves as a digital gateway to promote environmental conservation, sustainable forest management, and ecological awareness among the masses.

## Tools and Technologies Used

[![Python](https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-6.1-green?style=for-the-badge&logo=django)](https://www.djangoproject.com/)
[![SQLite](https://img.shields.io/badge/SQLite-3.4x-blue?style=for-the-badge&logo=sqlite)](https://www.sqlite.org/)

This project is a dynamic web application built with Django. The previous static Angular site has been replaced with this Django project.

## Getting Started

### Prerequisites

- Python 3.12+
- pip

### Setup

```bash
# 1. Create and activate a virtual environment
python3 -m venv venv
source venv/bin/activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. Apply database migrations
python manage.py migrate

# 4. (Optional) Create a superuser for the admin panel
python manage.py createsuperuser

# 5. Run the development server
python manage.py runserver
```

Then open http://127.0.0.1:8000/ in your browser.

## Project Structure

```
SafeNepal/
├── manage.py              # Django management script
├── requirements.txt       # Python dependencies
├── safnepal/              # Project configuration (settings, urls, wsgi)
├── core/                  # Main app (views, models, templates logic)
├── templates/core/        # HTML templates
└── static/                # Static files (css, js, images)
```

## Contributors
- [Prabin Thapa Magar](https://github.com/prabinay/)
- [Hemant Basnet](https://github.com/hemantbas09)
- [Roshan Shrestha](https://github.com/roxen-creator)

## Feedback
Any suggestion and feedback is welcome. You can email us.
- <a href = "mailto: prabiney.garcia.23@gmail.com"> Prabin's email</a>
- <a href = "mailto: hemantbasnet61@gmail.com"> Hemant's email</a>
- <a href = "mailto: itsroxen56@gmail.com"> Roshan's email</a>
