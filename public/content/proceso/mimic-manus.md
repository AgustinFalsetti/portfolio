# Bitácora de Ingeniería: MIMIC MANUS (Glove Hand IoT) 🦾

**Proyecto:** Mano Robótica Antropomórfica Biomimética Asistida por Sensores y Plataforma IoT  
**Institución:** I.S.F.T. N° 176 - Morón  
**Tecnicatura:** Internet de las Cosas y Sistemas Embebidos (Práctica Profesionalizante)  
**Autores:** Agustín Fernando Falsetti y Vilma Bruzzo  
**Orientador:** Prof. Edgardo Lovillo  

---

## 1. Contexto y Desafío
El proyecto nació con la premisa de construir una alternativa abierta, económica y teleoperada a las costosas prótesis mioeléctricas comerciales, utilizando fabricación digital (impresión 3D FDM) y microcontroladores accesibles.
Debido a límites presupuestarios en la etapa inicial de adquisición de servomotores, el prototipo fue concebido y validado físicamente con **3 dedos activos** (pulgar, índice y medio), completando el antebrazo con capacidad modular para los 5 dedos.

---

## 2. Decisiones Técnicas Clave
1. **Topología Inalámbrica Híbrida**:
   - Para el control gestual en tiempo real: protocolo **ESP-NOW** a 2.4 GHz (comunicación directa a nivel MAC sin latencia de enrutador).
   - Para supervisión y telemetría: conexión Wi-Fi del receptor a **HiveMQ Cloud** (MQTT sobre TLS en puerto 8883) y panel web en **Netlify**.
2. **Cinemática Antagónica**:
   - Flexión activa por tracción de **tanza de nylon transparente** mediante 5 servomotores SG90.
   - Retorno pasivo por **hilo elástico negro** dorsal para volver al reposo al ceder la tensión.
3. **Divisor Resistivo Óptimo**:
   - Los sensores comerciales varían de 15 kΩ (rectos) a 80 kΩ (doblados).
   - Se seleccionó un resistor fijo normalizado de $22\text{ k}\Omega$ basado en la media geométrica ($R_{fijo} \approx \sqrt{15.000 \times 45.000} \approx 26\text{ k}\Omega$), maximizando el rango dinámico del ADC.

---

## 3. Problemas Reales y Soluciones de Taller
* **Problema: Reinicios del ESP32 por caída de tensión (*brownouts*)**:
  - *Causa:* Los picos de corriente combinada de los servomotores (hasta 750 mA por servo en arranque o bloqueo) provocaban un colapso en el regulador del microcontrolador.
  - *Solución:* Diseño de PCB propia de potencia con fuente regulada externa de 5 V / 3 A y bus común de tierra (GND) con el ESP32.
* **Problema: Conflicto del pin analógico del 5.° dedo**:
  - *Causa:* El pin GPIO 25 pertenece al módulo ADC2 del ESP32, el cual es inhabilitado internamente por hardware cuando el módulo Wi-Fi está activo transmitiendo paquetes MQTT.
  - *Solución:* Migración del canal analógico al pin **GPIO 36 (VP)**, correspondiente al módulo **ADC1**.
* **Problema: Desincronización del enlace ESP-NOW**:
  - *Causa:* Al conectar el receptor a un hotspot móvil 4G, el teléfono reasignaba aleatoriamente el canal de RF (del canal 1 al 13), perdiendo la recepción de paquetes ESP-NOW del guante.
  - *Solución:* Lectura del canal Wi-Fi real mediante `WiFi.channel()` y fijación coincidente de la constante `WIFI_CHANNEL` en ambos firmwares.

---

## 4. Estado de Producción y Enlaces
* **Panel Web de Telemetría**: [https://glovehand.netlify.app/](https://glovehand.netlify.app/)
* **Firmware y Repositorio**: `[COMPLETAR: Enlace al repositorio GitHub de MIMIC-MANUS]`
