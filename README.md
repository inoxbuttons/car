# БЛЕСК — лендинг автомойки с 3D-мойкой

## Запуск
Модели грузятся через fetch, поэтому `index.html` нельзя открыть двойным кликом — нужен любой локальный сервер:

```
cd site
npx serve .          # или: python3 -m http.server 8080
```
Открыть http://localhost:3000 (или :8080). Параметры: `?car=omoda`, `?car=jetour` — стартовая модель; `?lite` — без зеркального пола.

## Как работает мойка
- **Скролл** — через машину проезжает «арка» с водяной завесой, спереди назад; за ней остаётся мокрый глянец.
- **Губка** (кнопка в панели) — трите машину мышью/пальцем, грязь стирается там, где провели.
- **Облёт** — тянуть мышью (только по горизонтали/вертикали, без крена и ниже пола не уйти).
- **Зум** — pinch на трекпаде/телефоне, Ctrl + колесо, или кнопки +/−. Обычное колесо листает страницу.

Грязь процедурная (шейдер поверх родных материалов модели), поэтому подходит любая машина.

## Как заменить машину
1. Сожмите модель (необязательно, но в 5–8 раз легче):
   `npx @gltf-transform/cli optimize car.glb site/models/mycar.glb --compress meshopt --texture-compress webp --texture-size 2048 --simplify false --palette false`
2. Добавьте строку в `CARS` в `src/main.js` (или задайте `window.CAR_MODELS = [...]` в index.html до app.js):
   `{ id: 'mycar', name: 'Моя машина', url: 'models/mycar.glb', front: 1, paint: 'ИмяМатериалаКраски' }`
   - `front: -1`, если машина стоит задом к камере.
   - `paint` — имя материала кузова; он перекрашивается в чёрный глянец (как в референсе). Без `paint` — родной цвет. Цвет: `window.CAR_PAINT = '#1a1a1a'` (или `null`).
3. Пересобрать: `npm i three@0.170.0 three-mesh-bvh@0.8.3 esbuild && npx esbuild src/main.js --bundle --format=esm --minify --outfile=assets/app.js`

## Ассеты и лицензии
- HAVAL H6 HEV 2024 — vinishows, Sketchfab, **CC BY 4.0** (можно коммерчески с указанием автора).
- 2023 Chery Omoda 5 и 2022 Chery Jetour Dashing — Ddiaz Design, Sketchfab, **CC BY-NC-SA 4.0 — только некоммерческое использование**. Для реального сайта мойки оставьте Haval или купите/возьмите модель с коммерческой лицензией.
- HDRI «studio» — Poly Haven (CC0), через пакет @pmndrs/assets.
- Шрифты Unbounded и Manrope — SIL OFL.
- three.js, three-mesh-bvh — MIT.
