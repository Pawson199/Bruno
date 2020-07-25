import React from 'react'

export default function Map() {

        window.easyPackAsyncInit = function () {
            global.easyPack.init({
                defaultLocale: 'pl',
                mapType: 'osm',
                searchType: 'osm',
                points: {
                    types: ['parcel_locker']
                },
                map: {
                    initialTypes: ['parcel_locker']
                }
            });
          };
          function openModal() {
            global.easyPack.modalMap(function(point, modal) {
              modal.closeModal();
              console.log(point);
            }, { width: 500, height: 600 });
          }


    return (
        <button onClick={ () => { openModal(); return false}}>Open Popup</button>
    )
}
