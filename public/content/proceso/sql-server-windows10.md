# Bitácora de Ingeniería: SQL Server 2022 Express en Windows 10 🗄️

**Proyecto:** Automatización de Instalación y Configuración de Microsoft SQL Server 2022 Express  
**Tecnologías:** SQL Server 2022, Transact-SQL, PowerShell, Chocolatey, SSMS, pyodbc, SQLAlchemy  
**Autor:** Agustín Fernando Falsetti  

---

## 1. Problema Abordado
Configurar SQL Server en entornos Windows 10 para desarrollo local suele generar fricciones por servicios deshabilitados por defecto, bloqueos de firewall en el puerto TCP 1433, autenticación de Windows vs SQL Server (usuario `sa`), y compatibilidad de drivers ODBC con Python.

---

## 2. Flujo de Automatización
1. **Instalación silenciosa con Chocolatey**:
   ```powershell
   choco install sql-server-express -y
   choco install sql-server-management-studio -y
   ```
2. **Habilitación de protocolo TCP/IP y puerto 1433**:
   Configuración en *SQL Server Configuration Manager* para permitir conexiones remotas y de aplicaciones cliente.
3. **Regla de Firewall de Windows**:
   ```powershell
   New-NetFirewallRule -DisplayName "SQL Server TCP 1433" -Direction Inbound -Protocol TCP -LocalPort 1433 -Action Allow
   ```
4. **Verificación con `sqlcmd`**:
   ```powershell
   sqlcmd -S .\SQLEXPRESS -E -Q "SELECT @@VERSION;"
   ```
5. **Conexión desde Python (SQLAlchemy / pyodbc)**:
   ```python
   DATABASE_URL = "mssql+pyodbc://sa:password@localhost:1433/MiBase?driver=ODBC+Driver+18+for+SQL+Server&TrustServerCertificate=yes"
   ```

---

## 3. Estado de Producción y Enlaces
* **Guía Completa en PDF**: Disponible para descarga en el portfolio (`/public/cv-agustin-falsetti.pdf`).
* **Scripts de PowerShell / SQL**: `[COMPLETAR: Enlace al repositorio de scripts]`
