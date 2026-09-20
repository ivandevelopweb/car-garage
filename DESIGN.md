---
name: Avtozvuk Tonirovka Shostka
description: Practical local automotive workshop site for tinting and car audio in Shostka.
colors:
  ink: "#201F1F"
  ink-soft: "#332826"
  paper: "#FFFFFF"
  paper-strong: "#FAF6F5"
  accent: "#FFC803"
  accent-deep: "#7A5E00"
  muted-text: "#67615F"
typography:
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 6.2rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "11px"
    fontWeight: 800
    letterSpacing: "0.14em"
rounded:
  sm: "4px"
  md: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "75px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "13px 20px"
    height: "48px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "13px 20px"
    height: "48px"
---

# Design System: Автозвук, Тонировка — Шостка

## Overview

**Creative North Star: “The Workshop Service Sheet”**

Сайт выглядит как аккуратно оформленный сервисный лист из реальной автомастерской: чёрный графит, белая бумага, жёлтый сигнальный акцент и крупная типографика. Он достаточно заметный для первого экрана, но остаётся прикладным: быстро показывает услуги, локацию, график и способ записи.

Дизайн держит напряжение между тёмной мастерской и чистыми светлыми поверхностями. Фотографии показывают процесс и детали, а текст быстро отвечает на четыре вопроса: что делают, где находятся, когда работают и как записаться.

**Key Characteristics:**
- плотная сервисная композиция без bento-структур;
- графит, белый paper и сигнальный жёлтый;
- display-типографика с индустриальным характером;
- тонкие разделители и нумерация вместо декоративных карточек;
- один повторяющийся контактный сценарий: позвонить или записаться.

## Colors

Палитра взята из сцены использования: тёмная мастерская, белый рабочий лист и жёлтый акцент сервисной маркировки.

### Primary
- **Signal Yellow** (`#FFC803`): CTA, активные элементы, акцентные номера и состояние действия.

### Neutral
- **Graphite Ink** (`#201F1F`): hero, footer, review-панели и основной тёмный текст.
- **Soft Graphite** (`#332826`): тёмные поля формы и booking-секция.
- **Paper** (`#FFFFFF`): основной фон и светлые поля.
- **Warm Paper** (`#FAF6F5`): чередование секций и спокойные контейнеры.
- **Signal Yellow Deep** (`#7A5E00`): hover, ссылки на светлых поверхностях и фокус.
- **Muted Text** (`#67615F`): вторичный текст на светлых поверхностях.

### Named Rules
**The Signal Rule.** Жёлтый появляется там, где посетителю нужно заметить действие, статус или ориентир. Большие поверхности остаются графитовыми или светлыми, кроме специально выделенной CTA-секции.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow, sans-serif fallback)
**Body Font:** Montserrat (with system sans-serif fallback)
**Label Font:** Montserrat, uppercase with generous tracking

**Character:** Barlow Condensed делает заголовки похожими на маркировку в рабочем помещении; Montserrat сохраняет спокойную читаемость длинного текста и форм.

### Hierarchy
- **Display** (600, `clamp(3.5rem, 7vw, 6.2rem)`, `.98`): hero и ключевые page headings.
- **Headline** (600, `clamp(2.5rem, 5vw, 4.15rem)`, `.98`): section headings.
- **Title** (600, `1.55–2.2rem`, `.98`): service rows, cards and support blocks.
- **Body** (400, `15–17px`, `1.65`): explanatory copy with a 65–75ch measure.
- **Label** (800, `11px`, `0.14em`, uppercase): metadata, section cues and form labels.

## Layout

Основной контейнер — максимум 1180px с боковым отступом 32px на desktop и 18px на mobile. Секции чередуют белые поверхности, тёплый paper и графит. Hero — двухколоночный: текст и action слева, процессуальное фото справа; на mobile он складывается в один поток и заканчивается фиксированной нижней панелью контактов.

Сервисные списки используют строки с нумерацией, иконкой, описанием и стрелкой. Формы и контакты строятся вокруг двухколоночного desktop-layout и одного столбца на ширине 760px и ниже.

## Elevation & Depth

Система преимущественно плоская: глубина создается чередованием тональных поверхностей, 1px-разделителями и фотографиями. Единственная ambient-тень принадлежит форме записи на тёмной CTA-секции; карточки не получают одинаковые мягкие тени по умолчанию.

## Shapes

Основные контролы имеют аккуратный радиус 4px, фото и крупные контейнеры — 12px или прямую геометрию, когда это усиливает ощущение рабочего листа. Толстые боковые полосы и hard-offset shadows не используются. Границы — тонкие и функциональные.

## Components

### Buttons
- **Shape:** compact rectangular controls (4px radius).
- **Primary:** signal yellow background, ink text, uppercase label, 48px minimum height.
- **Hover / Focus:** primary moves to deep yellow; focus uses the shared 3px yellow-tinted ring.
- **Secondary:** ink or transparent outlined variant for dark surfaces.

### Cards / Containers
- **Corner Style:** 4px for controls, 12px for media frames.
- **Background:** tonal surfaces rather than gradient fills.
- **Shadow Strategy:** only the booking form receives ambient depth.
- **Border:** 1px ink or low-alpha paper line.
- **Internal Padding:** 18–34px depending on density.

### Inputs / Fields
- **Style:** paper or soft graphite field with 1px border and 3px radius.
- **Focus:** deep-yellow border and a restrained 3px yellow ring.
- **Attachments:** the booking form accepts multiple car photos through the same compact field style.
- **Error / Disabled:** native semantics remain available for the future backend integration.

### Navigation

The header is a utility strip plus a solid paper nav row, never a floating glass surface. Desktop exposes phone, booking CTA and a service dropdown; mobile collapses to a menu with an expandable service list plus a fixed call/booking bar.

### Service Row

Numbered rows replace a grid of identical icon cards. The featured service receives a low-alpha yellow surface; all others remain neutral.

## Do's and Don'ts

### Do:
- **Do** keep phone, address, hours and booking actions visible in the first screen or one tap away.
- **Do** use real business facts and remote editorial photos as visual context until owner photos are supplied.
- **Do** add services and materials through the arrays in `src/content.ts`.
- **Do** keep yellow rare and functional; reserve it for actions, status and orientation.

### Don't:
- **Don't** add glassmorphism, bento grids, decorative gradients, fake stats or generic supercar imagery.
- **Don't** invent prices, guarantees, team experience or unsupported services.
- **Don't** turn the materials section into an SEO page factory.
