const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((traveller) => {
    return traveller.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((traveller) => {
    return traveller.endLocation;
  })

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((traveller) => {
    return traveller.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((traveller) => {
    return traveller.distance >= minDistance;
  });

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
