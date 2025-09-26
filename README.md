# 📊 Dashboard Acme - Next.js 15 con App Router

Este es un proyecto de dashboard moderno desarrollado siguiendo el **Next.js Learn Course** oficial. Representa una aplicación completa de gestión empresarial con funcionalidades avanzadas de Next.js 15.

## 🚀 ¿Qué has construido?

Has desarrollado una **aplicación de dashboard empresarial completa** que incluye:

### ✨ Características Principales
- **🏠 Página de inicio** con diseño responsive y hero images
- **📊 Dashboard principal** con métricas en tiempo real
- **💰 Sistema de facturación** (invoices) con CRUD completo
- **👥 Gestión de clientes** con tabla interactiva
- **🔐 Autenticación** con NextAuth.js
- **📈 Gráficos de ingresos** dinámicos
- **🔍 Búsqueda y paginación** avanzada
- **💾 Base de datos PostgreSQL** con operaciones completas

### 🛠️ Stack Tecnológico
- **Next.js 15** con App Router (último modelo de routing)
- **React 19** con Server Components
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos modernos
- **PostgreSQL** como base de datos
- **NextAuth.js** para autenticación
- **Heroicons** para iconografía
- **Zod** para validación de schemas

### 🎯 Conceptos de Next.js Implementados

**Routing y Navigation:**
- App Router (nueva arquitectura de Next.js 13+)
- Layouts anidados
- Navegación con componentes Link
- Rutas dinámicas y estáticas

**Optimización de Rendimiento:**
- Server Components por defecto
- Client Components cuando es necesario
- Streaming con Suspense
- Lazy loading de componentes
- Optimización de imágenes con next/image

**Gestión de Datos:**
- Server Actions para formularios
- Fetching de datos en el servidor
- Manejo de estados de carga
- Error handling robusto

**Base de Datos y Backend:**
- Integración con PostgreSQL
- Seeds para datos de prueba
- API Routes para operaciones específicas
- Validación de datos con Zod

## 🗂️ Estructura del Proyecto

```
app/
├── dashboard/           # Dashboard principal
│   ├── customers/      # Gestión de clientes
│   ├── invoices/       # Sistema de facturación
│   └── layout.tsx      # Layout del dashboard
├── lib/                # Lógica de negocio
│   ├── data.ts         # Funciones de datos
│   ├── definitions.ts  # Tipos TypeScript
│   └── utils.ts        # Utilidades
├── ui/                 # Componentes de interfaz
│   ├── dashboard/      # Componentes del dashboard
│   ├── invoices/       # Componentes de facturas
│   └── customers/      # Componentes de clientes
└── page.tsx            # Página principal
```

## 🎓 Lo que has aprendido

1. **App Router:** Nueva forma de estructurar aplicaciones Next.js
2. **Server Components:** Renderizado en el servidor para mejor rendimiento
3. **Streaming:** Carga progresiva de contenido
4. **Database Integration:** Conexión y operaciones con PostgreSQL
5. **Authentication:** Sistema completo de login/logout
6. **Form Handling:** Server Actions para procesamiento de formularios
7. **Error Handling:** Manejo robusto de errores y estados de carga
8. **TypeScript:** Tipado estático para mayor robustez
9. **Responsive Design:** Interfaces adaptables a diferentes dispositivos

## 🚀 Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
# Crea un archivo .env.local con tu POSTGRES_URL

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar en producción
npm start
```

## 🌟 Logros Completados

✅ Configuración inicial con Next.js 15  
✅ Sistema de routing con App Router  
✅ Integración de base de datos PostgreSQL  
✅ Dashboard con métricas interactivas  
✅ Sistema CRUD de facturas  
✅ Gestión de clientes  
✅ Autenticación con NextAuth.js  
✅ Optimización de rendimiento  
✅ Diseño responsive con Tailwind  
✅ Manejo de errores y estados de carga  

## 📚 Recursos

- [Next.js Learn Course](https://nextjs.org/learn) - Tutorial oficial seguido
- [Next.js Documentation](https://nextjs.org/docs) - Documentación completa
- [Tailwind CSS](https://tailwindcss.com) - Framework de estilos utilizado

---

**¡Felicidades!** Has completado con éxito el desarrollo de una aplicación moderna con las mejores prácticas de Next.js 15. Este proyecto demuestra tu dominio de React, Next.js, TypeScript y desarrollo full-stack moderno.
