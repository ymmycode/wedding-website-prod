import * as THREE from 'three'

export default class DeviceOrientation 
{
    constructor()
    {
        // alpha, beta, gamma orientation
        this.alpha = this.beta = this.gamma = 1

        // absolute orientation
        // this.sensorAbs = new AbsoluteOrientationSensor({frequency: 60, referenceFrame: `device`})

        this.quaternion = new THREE.Quaternion()
        this.euler = new THREE.Euler()

        

        // Promise.all([navigator.permissions.query({ name: "accelerometer" }),
        //     navigator.permissions.query({ name: "magnetometer" }),
        //     navigator.permissions.query({ name: "gyroscope" })])
        //     .then(results => {
        //         if (results.every(result => result.state === "granted")) {
        //             this.sensorAbs.start()
        //         } 
        //         else 
        //         {
        //             console.log("No permissions to use AbsoluteOrientationSensor.")
        //         }
        // })

        // this.startSensor()


        // this.orientation()
    }

    startSensor()
    {
        // absolute
        this.sensorAbs.addEventListener('reading', () => {
            this.quaternion.fromArray(this.sensorAbs.quaternion).invert()
            this.euler.setFromQuaternion(this.quaternion)
        })

        this.sensorAbs.addEventListener('error', error => {
            if (error.name == 'NotReadableError') {
                console.log("Sensor is not available.")
            }
        })

        // console.log(this.euler)
    }

    updateSensor()
    {
        this.startSensor()
    }

    orientation()
    {
        if (window.DeviceOrientationEvent) 
        {
            this.getOrientation()
        } 
        else 
        {
            console.log("Sorry, your browser doesn't support Device Orientation");
        }
    }

    getOrientation()
    {
        window.addEventListener(`deviceorientation`, (e) => 
        {
            this.alpha = e.alpha 
            this.beta = e.beta 
            this.gamma = e.gamma 
            document.querySelector(".alpha").innerText = this.alpha.toFixed(0);
            document.querySelector(".beta").innerText = this.beta.toFixed(0);
            document.querySelector(".gamma").innerText = this.gamma.toFixed(0);
        })
    }

    // permissionToActivate()
    // {
        // permission IOS
        // if (DeviceOrientationEvent.requestPermission) {
        //     DeviceOrientationEvent.requestPermission()
        //     .then(response => {
        //         if (response == "granted") {
        //             window.addEventListener("deviceorientation", function(e) {
        //                 const { alpha, beta, gamma } = e;
        //                 document.querySelector(".alpha").innerText = alpha.toFixed(0);
        //                 document.querySelector(".beta").innerText = beta.toFixed(0);
        //                 document.querySelector(".gamma").innerText = gamma.toFixed(0);
        //             });
        //         } else {
        //             alert('Device orientation permission not granted');
        //         }
        //     }).catch((err) => {console.log(err)});
        // } else {
        //     alert("Device motion permission access method not available");
        // }
    // }
}