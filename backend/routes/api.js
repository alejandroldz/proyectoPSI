const express = require('express');
const router = express.Router();

const taxiController = require('../controllers/taxiController');
const conductorController = require('../controllers/conductorController');
const precioController = require('../controllers/precioController');
const turnoController = require('../controllers/turnoController');
const clienteController = require('../controllers/clienteController');
const pedidoController = require('../controllers/pedidoController');
const viajeController = require('../controllers/viajeController');
const reportController = require('../controllers/reportController');

router.post('/taxi', taxiController.createTaxi);
router.get('/taxi', taxiController.getTaxis);
router.put('/taxi/:id', taxiController.updateTaxi);
router.delete('/taxi/:id', taxiController.deleteTaxi);

router.post('/conductor', conductorController.createConductor);
router.get('/conductor', conductorController.getConductores);
router.get('/conductor/:nif', conductorController.getConductorNIF);

router.post('/precios', precioController.crearOActualizarPrecio);
router.get('/precios', precioController.getPrecios);
router.post('/precios/simular', precioController.simularPrecio);

router.get('/turno', turnoController.getTurnos);
router.get('/turno/activos',turnoController.getActiveTurnos); 
router.get('/turno/:nif', turnoController.getTurnosConductor);
router.post('/turno', turnoController.createTurno);
router.post('/turno/taxis-disponibles', turnoController.getTaxisDisponibles);

router.post('/cliente', clienteController.createCliente);
router.get('/cliente/:nif', clienteController.getClienteNIF);
router.get('/cliente/:id', clienteController.getClienteID);
router.put ('/conductor/:nif', conductorController.updateConductor);
router.delete ('/conductor/:nif', conductorController.deleteConductor);

router.post('/pedido', pedidoController.createPedido);
router.get('/pedido/:id', pedidoController.getPedidoID);
router.post('/pedido/cambiar-estado/:id', pedidoController.cambiarEstadoPedido);
router.post('/pedido/pendientes', pedidoController.getPedidosPendientes);

router.post('/viaje', viajeController.createViaje);
router.get('/viaje/pedido/:id', viajeController.getViajeIdPedido);
router.get('/viaje/:id', viajeController.getViajeID);
router.put('/viaje/finalizar/:id', viajeController.finalizarViaje);
router.get('/viaje/conductor/:nif', viajeController.getViajesConductor);
router.get('/viaje/taxi/:id/existe', viajeController.TaxiEnViajes);

router.get('/reportes/totales', reportController.getTotales);
router.get('/reportes/subtotales/:tipo', reportController.getSubtotales);
router.get('/reportes/detalles/:tipo/:entidad/:id', reportController.getDetalles);

module.exports = router;
