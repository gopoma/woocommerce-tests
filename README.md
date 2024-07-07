# woocommerce-tests

### Para ejecutar test en una archivo especifico en los 3 navegadores
```bash
npx playwright test "archivo.js"
```

### Para ejecutar test solo en chrome
```bash
npx playwright test "archivo.js" --project=chromium
```

`Si se quiere ver la venta con el proceso de ejecucion agregar al final de cualquier comando "--headed"`

`Para ejecutar codegen:  npx playwright codegen "URL a testear"`

Ejecutar suite de tests:

```bash
npx playwright test --workers 1 --headed --project=chromium && npx playwright show-report
```

Ejecutar un test específico:

```bash
npx playwright test tests/CPCN047.test.ts --workers 1 --headed --project=chromium && npx playwright show-report
```

Consulta `test-results` para los videos, verificar que `playwright.config.js` tiene habilitado la grabación.
