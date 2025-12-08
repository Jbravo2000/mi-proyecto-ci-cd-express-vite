# Imagen base oficial Python
FROM python:3.12.12-alpine3.23

# Vars de entorno para Python
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Crear directorio de trabajo
WORKDIR /app

# Copiar e instalar dependencias
COPY app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar código de la app
COPY app/ .

# Exponer puerto de Flask
EXPOSE 5000

# Ejecutar la app
CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]
