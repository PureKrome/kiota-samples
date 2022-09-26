package models

import (
    i2ae4187f7daee263371cb1c977df639813ab50ffa529013b7437480d1ec0158f "github.com/microsoft/kiota-abstractions-go"
    i878a80d2330e89d26896388a3f487eef27b0a0e6c010c493bf80be1452208f91 "github.com/microsoft/kiota-abstractions-go/serialization"
)

// SizeRange 
type SizeRange struct {
    // Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
    additionalData map[string]interface{}
    // The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    maximumSize *int32
    // The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
    minimumSize *int32
}
// NewSizeRange instantiates a new sizeRange and sets the default values.
func NewSizeRange()(*SizeRange) {
    m := &SizeRange{
    }
    m.SetAdditionalData(make(map[string]interface{}));
    return m
}
// CreateSizeRangeFromDiscriminatorValue creates a new instance of the appropriate class based on discriminator value
func CreateSizeRangeFromDiscriminatorValue(parseNode i878a80d2330e89d26896388a3f487eef27b0a0e6c010c493bf80be1452208f91.ParseNode)(i878a80d2330e89d26896388a3f487eef27b0a0e6c010c493bf80be1452208f91.Parsable, error) {
    return NewSizeRange(), nil
}
// GetAdditionalData gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
func (m *SizeRange) GetAdditionalData()(map[string]interface{}) {
    return m.additionalData
}
// GetFieldDeserializers the deserialization information for the current model
func (m *SizeRange) GetFieldDeserializers()(map[string]func(i878a80d2330e89d26896388a3f487eef27b0a0e6c010c493bf80be1452208f91.ParseNode)(error)) {
    res := make(map[string]func(i878a80d2330e89d26896388a3f487eef27b0a0e6c010c493bf80be1452208f91.ParseNode)(error))
    res["maximumSize"] = i2ae4187f7daee263371cb1c977df639813ab50ffa529013b7437480d1ec0158f.SetInt32Value(m.SetMaximumSize)
    res["minimumSize"] = i2ae4187f7daee263371cb1c977df639813ab50ffa529013b7437480d1ec0158f.SetInt32Value(m.SetMinimumSize)
    return res
}
// GetMaximumSize gets the maximumSize property value. The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
func (m *SizeRange) GetMaximumSize()(*int32) {
    return m.maximumSize
}
// GetMinimumSize gets the minimumSize property value. The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
func (m *SizeRange) GetMinimumSize()(*int32) {
    return m.minimumSize
}
// Serialize serializes information the current object
func (m *SizeRange) Serialize(writer i878a80d2330e89d26896388a3f487eef27b0a0e6c010c493bf80be1452208f91.SerializationWriter)(error) {
    {
        err := writer.WriteInt32Value("maximumSize", m.GetMaximumSize())
        if err != nil {
            return err
        }
    }
    {
        err := writer.WriteInt32Value("minimumSize", m.GetMinimumSize())
        if err != nil {
            return err
        }
    }
    {
        err := writer.WriteAdditionalData(m.GetAdditionalData())
        if err != nil {
            return err
        }
    }
    return nil
}
// SetAdditionalData sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
func (m *SizeRange) SetAdditionalData(value map[string]interface{})() {
    m.additionalData = value
}
// SetMaximumSize sets the maximumSize property value. The maximum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
func (m *SizeRange) SetMaximumSize(value *int32)() {
    m.maximumSize = value
}
// SetMinimumSize sets the minimumSize property value. The minimum size (in kilobytes) that an incoming message must have in order for a condition or exception to apply.
func (m *SizeRange) SetMinimumSize(value *int32)() {
    m.minimumSize = value
}
