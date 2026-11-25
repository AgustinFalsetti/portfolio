# Bitácora de Ingeniería: Morón Responde 🏛️

**Proyecto:** Plataforma Cívica Web de Incidencias Urbanas del Municipio de Morón  
**Tecnologías:** React 18, Vite, TypeScript, Tailwind CSS, Leaflet, FastAPI (Python 3.12), SQLAlchemy, PostgreSQL (Neon Cloud), Vercel  
**Autor:** Agustín Fernando Falsetti  

---

## 1. Propósito del Proyecto
Crear una plataforma municipal integral, moderna y accesible que permita a los vecinos radicar incidencias (bacheo, luminarias, residuos, arbolado) y realizar el seguimiento en tiempo real de sus solicitudes mediante un ticket único (`MOR-2025-XXXX`) y una línea de tiempo cívica (`CivicTimeline`), integrando además un mapa interactivo de obras públicas.

---

## 2. Decisiones Técnicas y de Arquitectura
1. **Fidelidad al Sistema de Diseño Institucional**:
   - Adopción estricta de `DESIGN.md` con paleta oficial: `#be000d` (Rojo Municipal), `#135eae` (Azul Cívico), `#006b42` (Verde Resolutivo) y tipografía *Plus Jakarta Sans*.
   - Adaptación visual inspirada en el portal oficial `moron.gob.ar`.
2. **Validación Geoespacial Estricta**:
   - Integración de Leaflet con capa GeoJSON que define el polígono territorial del Partido de Morón.
   - Todo reporte fuera de este perímetro es rechazado preventivamente en el frontend y en el backend, sugiriendo canales provinciales o de partidos limítrofes.
3. **Persistencia y Migración de Base de Datos**:
   - Modelo relacional: `User`, `Reclamo`, `EstadoHistorial`, `Obra`.
   - Inicialmente desarrollado con SQLite y testeado contra SQL Server local con `pyodbc`.
   - Migrado exitosamente a **PostgreSQL serverless en Neon Cloud** para posibilitar el despliegue serverless continuo en **Vercel**.

---

## 3. Pruebas y Control de Calidad
* **Tests Automatizados (`pytest`)**: 6/6 tests de integración superados en `/backend/tests/test_api.py`:
  - `test_health`: Chequeo de salud del servicio.
  - `test_categorias`: Listado de áreas urbanas.
  - `test_metricas`: Cálculo de reclamos resueltos y pendientes.
  - `test_obras`: Intervenciones georreferenciadas.
  - `test_reclamos_list_and_search`: Búsqueda instantánea de ticket.
  - `test_login_and_create_reclamo`: Ciclo completo de creación con token JWT.
* **Build de Producción**: Compilado con `tsc && vite build` sin errores de tipado TypeScript ni dependencias rotas.

---

## 4. Estado de Producción y Enlaces
* **Demo en Vercel**: `[COMPLETAR: URL de despliegue en Vercel]`
* **Repositorio GitHub**: `[COMPLETAR: Enlace al repositorio GitHub de Morón Responde]`
