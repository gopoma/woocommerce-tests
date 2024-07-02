### Para ejecutar test en una archivo especifico en los 3 navegadores
```bash
npx playwright test "archivo.js"
```

### Para ejecutar test solo en chrome
```
npx playwright test "archivo.js" --project=chromium
```

Si se quiere ver la venta con el proceso de ejecucion agregar al final de cualquier comando "--headed"

Para ejecutar codegen:  npx playwright codegen "URL a testear"

```bash
npx playwright test --headed --project=chromium && npx playwright show-report
```

```bash
npx playwright test tests/example.spec.js --headed --project=chromium && npx playwright show-report
```
