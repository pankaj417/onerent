import PropertyApi from './property-api';
import jQuery from 'jquery';

describe('Client-Side Todo API', () => {
  let server, successFn, failureFn;
  let property = {"catsAllowed": true,
    "dogsAllowed": true,
    "location": {
      "lat": 47.64253919999999,
      "lng": -122.1948613
    },
    "minimumCreditScore": 650,
    "monthlyRent": 0,
    "numberBedrooms": 2,
    "numberBathrooms": 1,
    "petsAllowed": false,
    "rentMultiplier": 2.5,
    "smokingDeposit": 0,
    "targetDeposit": 2395,
    "targetRent": 2395,
    "totalArea": 1200,
    "id": "57324ee7d7fa2a0e00122c08",
    "defaultImageId": "573ce6b892ab0a27005967cf",
    "active": true,
    "address": "3518 109th Pl NE #102",
    "city": "Bellevue",
    "name": "3518 109th Pl NE #102",
    "ready": true,
    "state": "WA",
    "status": "Vacant",
    "type": "Condo",
    "zip": "98004",
    "numberOfParkingSpots": "0",
    "landlordResponsibleUtilities": "Water, Sewage, Garbage, Gas, Electricity",
    "tenantResponsibleUtilities": "Cable, Internet",
    "appliances": "Refrigerator, Oven/Range, Dish Washer, Stainless Steel Appliances, Garbage Disposal, Microwave",
    "additionalStorage": "Storage room on porch plus huge pantry",
    "washerDryer": "In-Unit",
    "desiredLeaseRange": "Desired = 12 months, Shortest = 12 months, Longest = 12 months",
    "petDeposit": 500,
    "interiorFeatures": "Granite Countertop, Hardwood Floor",
    "exteriorFeatures": "Balcony/Deck/Patio",
    "climateControl": "Electric Heating",
    "landmarksNearProperty": "bamboo floors, redone bathrooms, large porch-bottom unit, huge pantry, most of complex is owner occupied, family and pet friendly",
    "wiring": "High-Speed Internet",
    "hoa": "Yes",
    "instantViewingEnabled": "No",
    "pwId": "726171656",
    "computedStage": "4",
    "description": "Easy freeway access to both 520 and 405. 2.5 miles north of downtown Bellevue, Minutes to Microsoft in Redmond (7min), Google in Kirkland (6min), T-mobile (12min), Amazon (13 min) Walking distance to waterfront, Cross Kirkland Corridor trail. Park and Ride across the street from condo complex 2 assigned parking spots (1 covered). Updated kitchen/bathroom. Slab granite countertops, Stainless microwave and dishwasher. Double paned windows. Designer double glass sinks in walk-thru bath. Open living space. Dining room opens to a sunken family room. Large Pantry. Gorgeous bamboo floors. Wood burning fireplace! Enjoy barbequing on the extra-large deck. Washer/Dryer in unit. Club house, outdoor pool, and tennis courts! Year lease available June 1 Utilities included.",
    "defaultImage": {
      "labels": {
        "kitchen": 0.908425,
        "yacht": 0.61345261,
        "estate": 0.81905621,
        "cottage": 0.55290347,
        "luxury yacht": 0.92305517,
        "property": 0.82306892,
        "room": 0.90227133,
        "home": 0.55835092,
        "cabinetry": 0.87022495
      },
      "labelDate": "2016-05-18T22:04:03.437Z",
      "id": "573ce6b892ab0a27005967cf",
      "index": 1,
      "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463609015/57324ee7d7fa2a0e00122c08/clbmn3dniipmlomyw8yu.jpg",
      "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463609015/57324ee7d7fa2a0e00122c08/clbmn3dniipmlomyw8yu.jpg",
      "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463609015/57324ee7d7fa2a0e00122c08/clbmn3dniipmlomyw8yu.jpg"
    },
    "images": [
      {
        "labels": {
          "kitchen": 0.908425,
          "yacht": 0.61345261,
          "estate": 0.81905621,
          "cottage": 0.55290347,
          "luxury yacht": 0.92305517,
          "property": 0.82306892,
          "room": 0.90227133,
          "home": 0.55835092,
          "cabinetry": 0.87022495
        },
        "labelDate": "2016-05-18T22:04:03.437Z",
        "id": "573ce6b892ab0a27005967cf",
        "index": 1,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463609015/57324ee7d7fa2a0e00122c08/clbmn3dniipmlomyw8yu.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463609015/57324ee7d7fa2a0e00122c08/clbmn3dniipmlomyw8yu.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463609015/57324ee7d7fa2a0e00122c08/clbmn3dniipmlomyw8yu.jpg"
      },
      {
        "labels": {
          "stall": 0.602926,
          "farmhouse": 0.79468906,
          "estate": 0.64989948,
          "bathroom": 0.90974641,
          "villa": 0.57916027,
          "structure": 0.84338039,
          "cottage": 0.66958743,
          "property": 0.82306892,
          "room": 0.91408837,
          "plumbing fixture": 0.85857069
        },
        "labelDate": "2016-05-15T15:35:03.708Z",
        "id": "573896f5abfdba6800aaaa77",
        "index": 2,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326377/57324ee7d7fa2a0e00122c08/nsgkbqyzuo7afumi2fuj.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326377/57324ee7d7fa2a0e00122c08/nsgkbqyzuo7afumi2fuj.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326377/57324ee7d7fa2a0e00122c08/nsgkbqyzuo7afumi2fuj.jpg"
      },
      {
        "labels": {
          "bed": 0.55271834,
          "farmhouse": 0.8,
          "estate": 0.89623642,
          "real estate": 0.70613128,
          "villa": 0.5794791,
          "cottage": 0.64264512,
          "property": 0.82306892,
          "suite": 0.53781563,
          "room": 0.90931809,
          "bedroom": 0.69812447,
          "vacation": 0.89060092
        },
        "labelDate": "2016-05-15T15:35:03.703Z",
        "id": "573896f5b389717c00808d51",
        "index": 3,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326387/57324ee7d7fa2a0e00122c08/tbymgoc46zm3vyohc3hv.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326387/57324ee7d7fa2a0e00122c08/tbymgoc46zm3vyohc3hv.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326387/57324ee7d7fa2a0e00122c08/tbymgoc46zm3vyohc3hv.jpg"
      },
      {
        "labels": {
          "estate": 0.55947465,
          "villa": 0.51227975,
          "resort": 0.535707,
          "apartment": 0.50138938,
          "cottage": 0.67388779,
          "property": 0.82306892,
          "suite": 0.93233156,
          "room": 0.91366315,
          "condominium": 0.63407236
        },
        "labelDate": "2016-05-15T15:35:03.697Z",
        "id": "573896f55ba7ce95008cf8b1",
        "index": 4,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326390/57324ee7d7fa2a0e00122c08/cskenp3m20jd4visjipj.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326390/57324ee7d7fa2a0e00122c08/cskenp3m20jd4visjipj.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326390/57324ee7d7fa2a0e00122c08/cskenp3m20jd4visjipj.jpg"
      },
      {
        "labels": {
          "house": 0.73088014,
          "hacienda": 0.61700332,
          "residential area": 0.89837581,
          "area": 0.57691193,
          "real estate": 0.70613128,
          "structure": 0.84328049,
          "property": 0.82306892,
          "facade": 0.53830045,
          "home": 0.57165074
        },
        "labelDate": "2016-05-15T15:35:03.869Z",
        "id": "573896f52756262c0028d689",
        "index": 5,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326450/57324ee7d7fa2a0e00122c08/xw3ks9bj8d4nn4b5tojp.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326450/57324ee7d7fa2a0e00122c08/xw3ks9bj8d4nn4b5tojp.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326450/57324ee7d7fa2a0e00122c08/xw3ks9bj8d4nn4b5tojp.jpg"
      },
      {
        "labels": {
          "hearth": 0.59707195,
          "major appliance": 0.58379692,
          "interior design": 0.53731245,
          "basement": 0.5514105,
          "furniture": 0.53414971,
          "living room": 0.82612681,
          "cottage": 0.51918828,
          "property": 0.82306892,
          "room": 0.91509384,
          "condominium": 0.57995504
        },
        "labelDate": "2016-05-15T15:35:03.729Z",
        "id": "573896f55194218600047cdc",
        "index": 6,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326404/57324ee7d7fa2a0e00122c08/f7z0e9wiqopjrkosusum.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326404/57324ee7d7fa2a0e00122c08/f7z0e9wiqopjrkosusum.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326404/57324ee7d7fa2a0e00122c08/f7z0e9wiqopjrkosusum.jpg"
      },
      {
        "labels": {
          "house": 0.7279132,
          "backyard": 0.5272038,
          "courtyard": 0.61074758,
          "estate": 0.84330213,
          "real estate": 0.70613128,
          "villa": 0.63053077,
          "property": 0.82306892,
          "room": 0.80472392,
          "home": 0.59519339
        },
        "labelDate": "2016-05-15T15:35:03.695Z",
        "id": "573896f56ac6be77006338ab",
        "index": 7,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326421/57324ee7d7fa2a0e00122c08/gkata4az533fqa5iytyl.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326421/57324ee7d7fa2a0e00122c08/gkata4az533fqa5iytyl.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326421/57324ee7d7fa2a0e00122c08/gkata4az533fqa5iytyl.jpg"
      },
      {
        "labels": {
          "estate": 0.56243342,
          "real estate": 0.70613128,
          "interior design": 0.53673375,
          "basement": 0.5525462,
          "living room": 0.70797068,
          "cottage": 0.52639574,
          "property": 0.82306892,
          "hardwood": 0.62268567,
          "suite": 0.67739922,
          "room": 0.9071641,
          "condominium": 0.59357244,
          "home": 0.57605195
        },
        "labelDate": "2016-05-15T15:35:03.701Z",
        "id": "573896f4263b835e00bdbab5",
        "index": 8,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326395/57324ee7d7fa2a0e00122c08/me1sxi8ws9awklmaf4ug.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326395/57324ee7d7fa2a0e00122c08/me1sxi8ws9awklmaf4ug.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326395/57324ee7d7fa2a0e00122c08/me1sxi8ws9awklmaf4ug.jpg"
      },
      {
        "labels": {
          "house": 0.82244271,
          "backyard": 0.70086056,
          "residential area": 0.9026463,
          "structure": 0.83204275,
          "garden buildings": 0.66451949,
          "shed": 0.66125369,
          "property": 0.82306892,
          "facade": 0.504617,
          "yard": 0.6826002,
          "home": 0.52224439
        },
        "labelDate": "2016-05-15T15:35:03.627Z",
        "id": "573896f5066acf1300451d03",
        "index": 9,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326422/57324ee7d7fa2a0e00122c08/wo7ca0eunxlf3lxmhpej.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326422/57324ee7d7fa2a0e00122c08/wo7ca0eunxlf3lxmhpej.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326422/57324ee7d7fa2a0e00122c08/wo7ca0eunxlf3lxmhpej.jpg"
      },
      {
        "labels": {
          "room": 0.90536344,
          "property": 0.82306892,
          "real estate": 0.70613128,
          "nursery": 0.7031579,
          "furniture": 0.54075927
        },
        "labelDate": "2016-05-15T15:35:03.829Z",
        "id": "573896f5a2edcb900094cd1f",
        "index": 10,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326376/57324ee7d7fa2a0e00122c08/iiubrx5nzfw0vkrvfntg.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326376/57324ee7d7fa2a0e00122c08/iiubrx5nzfw0vkrvfntg.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326376/57324ee7d7fa2a0e00122c08/iiubrx5nzfw0vkrvfntg.jpg"
      },
      {
        "labels": {
          "room": 0.89519346,
          "property": 0.82306892,
          "farmhouse": 0.8,
          "dining room": 0.63520449,
          "villa": 0.60648876,
          "cottage": 0.56343549,
          "bed": 0.54234767,
          "bedroom": 0.52001822
        },
        "labelDate": "2016-05-15T15:35:03.950Z",
        "id": "573896f4b8f1265400a4383e",
        "index": 11,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326384/57324ee7d7fa2a0e00122c08/ss7f7ricljitoyqmhnyo.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326384/57324ee7d7fa2a0e00122c08/ss7f7ricljitoyqmhnyo.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326384/57324ee7d7fa2a0e00122c08/ss7f7ricljitoyqmhnyo.jpg"
      },
      {
        "labels": {
          "house": 0.878107,
          "driveway": 0.51380831,
          "hacienda": 0.53848428,
          "residential area": 0.91880924,
          "village": 0.60407346,
          "estate": 0.826301,
          "real estate": 0.70613128,
          "villa": 0.57161874,
          "town": 0.66274625,
          "cottage": 0.56536794,
          "property": 0.82306892,
          "neighbourhood": 0.81605017,
          "condominium": 0.60904211,
          "home": 0.70154583
        },
        "labelDate": "2016-05-15T15:35:03.629Z",
        "id": "573896f515e37a8b00eb821c",
        "index": 12,
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463326451/57324ee7d7fa2a0e00122c08/rghx9sqdvxtn4ob5sc8x.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463326451/57324ee7d7fa2a0e00122c08/rghx9sqdvxtn4ob5sc8x.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463326451/57324ee7d7fa2a0e00122c08/rghx9sqdvxtn4ob5sc8x.jpg"
      },
      {
        "labels": {
          "boat": 0.5393821,
          "kitchen": 0.96780515,
          "major appliance": 0.5151996,
          "yacht": 0.570764,
          "interior design": 0.77927268,
          "cottage": 0.57351351,
          "luxury yacht": 0.92307025,
          "property": 0.82306892,
          "room": 0.9004221,
          "condominium": 0.59912068,
          "home": 0.723194,
          "cabinetry": 0.93432707
        },
        "labelDate": "2016-05-18T22:04:04.027Z",
        "id": "573ce6af419dd08b009cccdb",
        "index": "0",
        "large": "https://res.cloudinary.com/onerent/image/upload/t_large/v1463609006/57324ee7d7fa2a0e00122c08/wb0rilkhyyd1xnre062e.jpg",
        "medium": "https://res.cloudinary.com/onerent/image/upload/t_medium/v1463609006/57324ee7d7fa2a0e00122c08/wb0rilkhyyd1xnre062e.jpg",
        "thumb": "https://res.cloudinary.com/onerent/image/upload/t_thumb/v1463609006/57324ee7d7fa2a0e00122c08/wb0rilkhyyd1xnre062e.jpg"
      }
    ]
  };

  beforeEach( () => {
    failureFn = sinon.spy();
    successFn = sinon.spy();
  });

  before(() => {
    server = sinon.fakeServer.create();
  });

  after(() => {
    server.restore();
  });

  describe ('#getAll', () => {

    // create a switch to allow get all request to succeed or fail
    let requestSuccess = true;

    before(() => {
      server.respondWith("GET", "/api/todos/", (req) => {
          if (requestSuccess) {
            req.respond(200, {}, JSON.stringify([todo]));
          } else {
            req.respond(500, {}, '');
          }
      });
    });

    it('sends a GET request', () => {
      sinon.stub(jQuery, 'ajax');
      PropertyApi.getAll(successFn, failureFn);

      expect(jQuery.ajax).to.have.been.calledWithMatch({
        url: '/api/properties/',
        type: 'GET',
        dataType: 'json',
      });

      jQuery.ajax.restore();
    });

    it('calls the success callback on success', () => {
      PropertyApi.getAll(successFn, failureFn);
      server.respond();

      expect(successFn).to.have.been.called;
      expect(failureFn).not.to.have.been.called;
    });

    it('calls the failure callback on failure', () => {
      requestSuccess = false;
      PropertyApi.getAll(successFn, failureFn);
      server.respond();

      expect(failureFn).to.have.been.called;
      expect(successFn).not.to.have.been.called;
    });
  });
});